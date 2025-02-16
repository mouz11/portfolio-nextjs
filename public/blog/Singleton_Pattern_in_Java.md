---
title: "Singleton Pattern in Java"
excerpt: "A deep dive into the Singleton Design Pattern, its implementations, and best practices in Java."
featuredImage: "/images/singleton-pattern.jpg"
readingTime: "8 min"
publishDate: "2025-02-08"
category: "Software Design Patterns"
---

# **The Singleton Design Pattern**

The **Singleton Design Pattern** is one of the most widely used design patterns in software development. It ensures that a class has only one instance throughout the application's lifecycle and provides a global point of access to that instance. This pattern is particularly useful when exactly one object is needed to coordinate actions across the system.

![Singleton Pattern Diagram](/images/singleton-pattern.jpg)

## **Why Use the Singleton Pattern?**

- **Resource Management**: Ensures that shared resources, such as database connections or configuration settings, are managed efficiently by having a single point of control.
- **Global State**: Maintains a global state that can be accessed from anywhere in the application without passing references around.

## **Implementations of the Singleton Pattern**

There are multiple ways to implement the Singleton pattern. Below, we will explore four different approaches, discussing their benefits and drawbacks.

### **1. Lazy Initialization (Non-Thread-Safe)**

```java
public class CollectionsUtil {
    private static CollectionsUtil INSTANCE;
    
    private CollectionsUtil() {}
    
    public static CollectionsUtil getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new CollectionsUtil();
        }
        return INSTANCE;
    }
    
    public <T> List<T> getLisFromIterable(Iterable<T> iterable) {
        List<T> list = new ArrayList<>();
        iterable.forEach(list::add);
        return list;
    }
}
```

#### **Behavior of This Implementation**

1. **Lazy Initialization**: The instance is created only when `getInstance()` is called for the first time.
2. **Not Thread-Safe**: Multiple threads may simultaneously see `INSTANCE == null` and create multiple instances, violating the Singleton pattern.

---

### **2. Eager Initialization**

```java
public class CollectionsUtil {
    private static final CollectionsUtil INSTANCE = new CollectionsUtil();
    private CollectionsUtil() {}
    
    public static CollectionsUtil getInstance() {
        return INSTANCE;
    }
    
    public <T> List<T> getLisFromIterable(Iterable<T> iterable) {
        List<T> list = new ArrayList<>();
        iterable.forEach(list::add);
        return list;
    }
}
```

#### **Behavior of This Implementation**

1. **Eager Initialization**: The instance is created when the class is loaded, ensuring it is available before use.
2. **Thread Safety**: This approach is inherently thread-safe as static fields are initialized safely during class loading.
3. **Potential Resource Waste**: The instance is created even if it is never used, which may lead to unnecessary resource consumption.

---

### **3. Lazy Initialization with Synchronization (Thread-Safe but Inefficient)**

```java
public class CollectionsUtil {
    private static CollectionsUtil INSTANCE;
    private CollectionsUtil() {}
    
    public static synchronized CollectionsUtil getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new CollectionsUtil();
        }
        return INSTANCE;
    }
    
    public <T> List<T> getLisFromIterable(Iterable<T> iterable) {
        List<T> list = new ArrayList<>();
        iterable.forEach(list::add);
        return list;
    }
}
```

#### **Behavior of This Implementation**

1. **Lazy Initialization**: The instance is created only when `getInstance()` is called for the first time.
2. **Thread Safety**: The `synchronized` keyword ensures that only one thread can execute `getInstance()` at a time, preventing multiple instances.
3. **Performance Overhead**: Synchronization introduces performance overhead since every call to `getInstance()` requires acquiring and releasing a lock.

---

### **4. Bill Pugh Singleton (Best Practice)**

```java
public class CollectionsUtil {
    private CollectionsUtil() {}
    
    private static class CollectionsUtilHolder {
        static final CollectionsUtil INSTANCE = new CollectionsUtil();
    }
    
    public static CollectionsUtil getInstance() {
        return CollectionsUtilHolder.INSTANCE;
    }
    
    public <T> List<T> getLisFromIterable(Iterable<T> iterable) {
        List<T> list = new ArrayList<>();
        iterable.forEach(list::add);
        return list;
    }
}
```

#### **Advantages of This Approach**

- **Lazy Initialization**: The instance is created only when needed.
- **Thread Safety**: The JVM guarantees that class loading and static initialization are thread-safe.
- **No Explicit Synchronization**: The code is simpler and avoids the overhead of synchronization.

---

## **Comparison of Different Singleton Implementations**

| Implementation Method                   | Lazy Initialization | Thread-Safe | Overhead | Recommended |
|-----------------------------------------|---------------------|-------------|----------|-------------|
| Lazy Init (Not Thread-Safe)            | ✅                  | ❌          | ✅        | ❌          |
| Eager Init                             | ❌                  | ✅          | ✅        | ❌          |
| Lazy Init with Sync                    | ✅                  | ✅          | ❌        | ❌          |
| Initialization-on-Demand Holder        | ✅                  | ✅          | ✅        | ✅          |

### **Conclusion**

- **If thread safety is not a concern**, the simple lazy initialization approach is acceptable.
- **If the instance is needed early in the application lifecycle**, eager initialization is a simple but wasteful solution.
- **If thread safety is required**, but you don't want performance issues, the **Bill Pugh Singleton** approach is the best choice, as it provides thread safety without explicit synchronization overhead.