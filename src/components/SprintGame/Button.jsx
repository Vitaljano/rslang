function Button({ className, content, type, onAnswer }) {
  const danger = 'w-28 rounded bg-danger  px-4 py-2';
  const success = 'w-28 rounded bg-success  px-4 py-2';
  const sprint = 'w-28 rounded bg-sprint  px-4 py-2';
  const def = 'rounded bg-white px-4 py-2';
  let typeSet = '';

  switch (type) {
    case 'success':
      typeSet = success;
      break;
    case 'danger':
      typeSet = danger;
      break;
    case 'sprint':
      typeSet = sprint;
      break;
    default:
      typeSet = def;
  }
  const style = className || '';

  return (
    <button
      onClick={onAnswer}
      className={className + ' ' + typeSet + ' ' + style}
      data-answer={type === 'success' ? true : false}
    >
      {content}
    </button>
  );
}
export default Button;
