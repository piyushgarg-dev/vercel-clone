# Vercel Clone

YouTube Video Link:

### Prerequisite

- Node.JS: https://youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&si=5gaDmQ_mzuBHvAsg
- Redis: https://youtu.be/Vx2zPMPvmug?si=Z_XT6BMNgkgwnX49
- Learn Docker:
  - Part 1: https://youtu.be/31k6AtW-b3Y?si=FIPffAKieiBGgo5c
  - Part 2: https://youtu.be/xPT8mXa-sJg?si=-6z_HkJZXsvrvSpO
- Docker with AWS ECS and ECR: https://youtu.be/AiiFbsAlLaI?si=dKrFZFr7fLBXKSab

### Setup Guide

This Project contains following services and folders:

- `api-server`: HTTP API Server for REST API's
- `build-server`: Docker Image code which clones, builds and pushes the build to S3
- `s3-reverse-proxy`: Reverse Proxy the subdomains and domains to s3 bucket static assets

### Local Setup

1. Run `npm install` in all the 3 services i.e. `api-server`, `build-server` and `s3-reverse-proxy`
2. Docker build the `build-server` and push the image to AWS ECR.
3. Setup the `api-server` by providing all the required config such as TASK ARN and CLUSTER arn.
4. Run `node index.js` in `api-server` and `s3-reverse-proxy`
