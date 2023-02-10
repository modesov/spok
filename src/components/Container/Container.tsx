import containerStyle from './Container.module.css';

export interface ContainerProps {
  children: React.ReactNode
}

export function Container({children}: ContainerProps) {
  return (
    <div className={containerStyle.container}>
      {children}
    </div>
  );
}
