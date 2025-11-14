/**
 * Represents a user entity with logging capabilities.
 * 
 * @remarks
 * This class demonstrates a tightly coupled design where the Logger dependency
 * is hard-coded within the User class. This approach makes the class difficult
 * to test and maintain as it cannot use different logger implementations.
 * 
 * @example
 * ```typescript
 * const user = new User();
 * user.createUser("Alice");
 * ```
 */


// Step 1: Logger class (does actual logging)
class Logger {
  log(message: string): void {
    console.log('Log:', message);
  }
}

// Step 2: User class (tightly coupled to Logger)
class User {
  // Problem: we are creating Logger inside User
  // User is "hard-coded" to this specific Logger
  private logger = new Logger();

  createUser(name: string): void {
    this.logger.log(`User ${name} created.`);
  }
}

// Usage
const userObj = new User();
userObj.createUser('Alice'); // logs: "User Alice created."
