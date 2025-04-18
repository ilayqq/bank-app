package com.example.myapp.limits;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RequestInfo {
    private int requestCount;
    private long startTime;

    public RequestInfo() {
        this.requestCount = 1;
        this.startTime = System.currentTimeMillis();
    }

    public void incrementRequestCount() {
        this.requestCount++;
    }

    public void reset() {
        this.requestCount = 1;
        this.startTime = System.currentTimeMillis();
    }
}
