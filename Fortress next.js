package com.fortress.auth;

import java.security.MessageDigest;

public class FortressAuth {

    public static String hash(String password) throws Exception {

        MessageDigest md = MessageDigest.getInstance("SHA-256");

        byte[] hash = md.digest(password.getBytes());

        StringBuilder hex = new StringBuilder();

        for(byte b : hash){
            hex.append(String.format("%02x",b));
        }

        return hex.toString();
    }
}