The one card pattern in the Toccala system: 16px radius, cream-100 ground, soft warm drop shadow, an inset photo cap with 12px top corners, and 8px of card padding around it.

```jsx
<PlanCard
  plan="Plan Name Here"
  price="$55"
  cadence="/ per month"
  features={["Feature line item here", "Another feature line here", "One more feature here"]}
  cta="Get Started"
  image="../../assets/img/card-photo.jpg"
/>
```

Never add a border — elevation comes from `--shadow-card` alone. Card widths in the source are fractional (361.511px); keep them.
