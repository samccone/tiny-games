b = [85, 1, -1],
  d = Array(100)
    .fill(0)
    .fill(1, 0, 40)
d[b[0]] = 3
c.onpointermove = a => {
  d = d.map(a => a % 2);
  a = (90 + a.x / 10) | 0;
  d[a] = d[a - 1] = 2;
}
setInterval(() => {
  a = (b[0] + b[1]) % 10,
    f = ((b[0] + 10 * b[2]) / 10) | 0,
    e = 10 * f + a;
  if (
    !(
      (b[(d[e] || 10 <= a || !a) && 1] *= -1) | (b[(d[e] || !f) && 2] *= -1) ||
      10 < f
    ) ||
    (d[e] = 0)
  )
    (d[(b[(d[b[0]] = 0)] = e)] = 3),
      (c.innerText = d.map((a, e) => (e % 10 ? a : "\n" + a)))
}, 100);
