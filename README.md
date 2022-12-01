# Ticket Purchase App Project with Microservices

## 1. About The Project

The Ticket Purchase App simulates a web platform where you can create an account and buy a fake ticket.

## 2. Built With

This app was created with isolated microservices with backend dependency `express`. You can see below the tecnologies used:

```
Typescript
React
NodeJS
Docker
Kubernetes
Scaffold
```
## 3. Getting Started

1. Define Kubernete secrets
- Run this command to and JWT_KEY secret on your terminal and set your own JWT_KEY value

    ```
    kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<your_secret>
    ```
- Check if JWT_KEY secret was created correctly:
    ```
    kubectl get secrets
    ```
- (MACOS) Add this path to /etc/hosts:
    ```
    127.0.0.1 ticketing.dev
    ````
- Start skaffold at the root project directory:
    ```
    skaffold dev
    ```
- Access this url:
    ```
    http://posts.com
    ```

# Acknowlegments

This project was created during this couse: Microservices with NodeJS and React - Stephen Grider (Udemy)

# Contact
- email: `diego.caruba@gmail.com`
- linkedin: `encurtador.com.br/bdBM1`


December/2022