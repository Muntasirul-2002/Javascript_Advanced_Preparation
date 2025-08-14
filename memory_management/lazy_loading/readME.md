## Definition
Lazy loading is a design pattern where resources like images, scripts, component data are loaded when they are needed, rather than during the initial page loading

### Examples
```
<img src="image.png" loading="lazy" alt="image" >
```

### Why use 
> Faster Initial page Load
> Better user experience

### How js used this
> JS uses event-based triggers to detect when a resources is needed

### How It Works in Background Execution

1.Example with Intersection Observer for lazy image loading:
2.Page loads → lightweight placeholders are shown.
3.Intersection Observer watches target elements.
4.When the element enters the viewport, the observer callback runs.
5.JS replaces placeholder with the actual resource URL.
6.Browser fetches and renders the resource.

### Real Project Use Cases
1. Image loading on blog page
2. Maps (load google maps api only when user click on "Show map")