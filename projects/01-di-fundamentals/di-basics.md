# What Is Dependency Injection?

Let's start with a simple definition:

**Dependency Injection is a technique where a class's required objects (its dependencies) are given to it instead of being created internally.**

## Technical Definition

**Dependency Injection (DI)** is a design pattern where a class receives its dependencies from the outside rather than creating them internally.

This approach is a concrete implementation of the **Inversion of Control (IoC)** principle, where the responsibility for constructing and managing dependencies is delegated to an external framework or container.

## Think of it as shifting responsibility:

Instead of a class declaring:
> "I'll go create the things I need"

It says:
> "Please give me the things I need to do my job"

This inversion of responsibility brings powerful advantages for maintainability and flexibility.

But you don't need a framework to understand DI. Let's see it without one.