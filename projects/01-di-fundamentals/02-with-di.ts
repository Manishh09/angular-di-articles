/**
 * A user service class that demonstrates constructor-based dependency injection.
 * 
 * @example
 * ```typescript
 * const logger = new LoggerA();
 * const userService = new UserA(logger);
 * userService.createUser('John Doe');
 * ```
 */


// Step 1: Logger class (dependency)
class LoggerA {
  log(message: string): void {
    console.log('Log:', message);
  }
}

// Step 2: User class (dependent on LoggerA)
// Notice: the dependency is injected via the constructor
class UserA {
  constructor(private logger: LoggerA) {} // Constructor Injection

  createUser(name: string): void {
    this.logger.log(`User ${name} created.`);
  }
}

// Step 3: Runtime composition
// We create the dependency first
const logger = new LoggerA();

// Then inject it into the dependent class
const userA = new UserA(logger);

// Step 4: Use the dependent class
userA.createUser('Alice'); // logs: "User Alice created."
