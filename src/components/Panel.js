import classNames from 'classnames';

function panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className 
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default panel;
