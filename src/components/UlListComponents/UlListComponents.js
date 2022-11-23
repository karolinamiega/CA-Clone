function UlListComponents({ data: { listItems, liClassName, ulClassName } }) {
  let liElements = listItems.map((item, index) => {
    return (
      <li className={liClassName} key={index}>
        <a href={item.url}>{item.title}</a>
      </li>
    );
  });
  return <ul className={ulClassName}>{liElements}</ul>;
}
export default UlListComponents;
