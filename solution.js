```javascript
<div class="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 p-4 rounded-lg shadow-md">
  <!-- Content -->
</div>
```
This improved version uses `via` to specify an intermediate color, smoothing the gradient transition and improving compatibility.
Alternatively, adding vendor prefixes or using a more robust gradient implementation could solve the issue.  Consider using a CSS fallback if the gradient is not supported:

```css
.gradient-fallback {
  background-image: linear-gradient(to right, blue, purple);
}
```