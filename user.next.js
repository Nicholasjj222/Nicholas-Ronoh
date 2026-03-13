/**
 * Advanced HTTP Client
 * Features:
 * - retries
 * - timeout
 * - caching
 * - typed responses
 */

type RequestOptions = {
  retries?: number
  timeout?: number
  cache?: boolean
}

type CacheEntry<T> = {
  data: T
  expiry: number
}

export class HttpClient {
  private cache = new Map<string, CacheEntry<any>>()

  constructor(private baseUrl: string) {}

  async get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { retries = 2, timeout = 5000, cache = false } = options
    const url = `${this.baseUrl}${endpoint}`

    if (cache) {
      const cached = this.cache.get(url)
      if (cached && cached.expiry > Date.now()) {
        return cached.data
      }
    }

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const controller = new AbortController()

        const id = setTimeout(() => controller.abort(), timeout)

        const res = await fetch(url, {
          signal: controller.signal
        })

        clearTimeout(id)

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }

        const data: T = await res.json()

        if (cache) {
          this.cache.set(url, {
            data,
            expiry: Date.now() + 1000 * 60
          })
        }

        return data
      } catch (err) {
        if (attempt === retries) {
          throw err
        }
      }
    }

    throw new Error("Request failed")
  }
}