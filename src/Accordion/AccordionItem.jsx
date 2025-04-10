import PropsTypes from "prop-types";
function AccordionItem({ children }) {
  return <>{children}</>;
}
AccordionItem.propTypes = {
  children: PropsTypes.node,
};
export default AccordionItem;
