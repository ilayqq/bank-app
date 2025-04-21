package com.example.myapp.limits;

import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class CustomRateLimiterService {
    private final Map<String, RequestInfo> requestCounts = new ConcurrentHashMap<>();
    private final int LIMIT = 100;
    private final long TIME_WINDOW = 60 * 1000;

    public boolean isRequestAllowed(String clientId) {
        long currentTime = System.currentTimeMillis();
        RequestInfo info = requestCounts.get(clientId);

        if (info == null) {
            requestCounts.put(clientId, new RequestInfo());
             return true;
        }

        if ((currentTime - info.getStartTime()) > TIME_WINDOW) {
            info.reset();
            return true;
        }

        if (info.getRequestCount() < LIMIT) {
            info.incrementRequestCount();
            return true;
        }

        return false;
    }
}
