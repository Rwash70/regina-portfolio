import styles from './Button.module.css';

export default function Button({
  as = 'button',
  children,
  className = '',
  ...props
}) {
  const Tag = as;
  return (
    <Tag className={`${styles.btn} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
