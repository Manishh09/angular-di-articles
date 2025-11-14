

/**
 * @example Demonstrates Dependency Injection using interfaces in TypeScript.
 * This example showcases the Dependency Inversion Principle where high-level modules
 * (UserB) depend on abstractions (ILogger) rather than concrete implementations.
 * 
 * Code Flow:
 * 1. ILogger interface defines the contract for logging operations
 * 2. ConsoleLogger provides concrete implementation of the logging interface
 * 3. UserB class depends on the ILogger abstraction, not the concrete implementation
 * 4. Dependencies are injected through constructor, enabling loose coupling
 * 5. Runtime composition creates the dependency chain and executes user creation
 *
 * This pattern enables better maintainability, testability, and adherence to SOLID principles.
 */




//***************CODE STARTS HERE *************** */

// Step 1: Define an interface for logging
// Think of this as a "contract" that says: any logger must have a log() method
interface ILogger {
  log(message: string): void;
}

// Step 2: Implement the logger
// This is a concrete logger that follows the ILogger contract
// It's considered a "low-level module" because it does the actual logging work
class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log('Log:', message);
  }
}

// Step 3: Create a high-level module that uses the logger
// Notice that UserB doesn't care how logging happens, it just knows
// it has a logger that follows the ILogger contract
class UserB {
  // Step 3a: Dependency Injection via constructor
  // We pass the logger into the class instead of creating it inside
  constructor(private logger: ILogger) {}

  // Step 3b: Use the logger to log user creation
  createUser(name: string): void {
    this.logger.log(`User ${name} created.`);
  }
}

// Step 4: Compose dependencies at runtime
// We decide which logger to use when creating UserB
const clogger = new ConsoleLogger(); // create a concrete logger
const userb = new UserB(clogger);   // inject logger into UserB

// Step 5: Use the high-level module
userb.createUser('Alice'); // logs: "User Alice created."
