function Button({ content, style }) {
  const danger = 'w-28 rounded bg-danger  px-4 py-2';
  const success = 'w-28 rounded bg-success  px-4 py-2';
  const def = 'rounded bg-white px-4 py-2';
  let type = '';

  switch (style) {
    case 'success':
      type = success;
      break;
    case 'danger':
      type = danger;
      break;

    default:
      type = def;
  }

  return <button className={type}>{content}</button>;
}
export default Button;
