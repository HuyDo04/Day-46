import "./App.css";
import Accordion, { AccordionItem } from "./components/Accordion";
import Tabs, { Tab } from "./components/Tabs";

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

// const li1 = React.createElement(
//   "li",
//   {},
//   React.createElement("a", { href: "/item1", onClick: handleClick }, "Item1")
// );

// const li2 = React.createElement(
//   "li",
//   {},
//   React.createElement("a", { href: "/item2", onClick: handleClick }, "Item2")
// );

// const li3 = React.createElement(
//   "li",
//   {},
//   React.createElement("a", { href: "/item3", onClick: handleClick }, "Item3")
// );

// const listLi = [li1, li2, li3];

// const ul = React.createElement(
//   "ul",
//   {},
//   listLi.map((li) => li)
// );

function App() {
  return (
    <>
      <Tabs
        defaultIndex={0}
        onChange={(index) => {
          console.log(index);
        }}
      >
        {/* Các Tab này sẽ là children của component Tab */}
        <Tab title="Tab 1">Tab1</Tab>
        <Tab title="Tab 2">Tab2</Tab>
        <Tab title="Tab 3">Tab3</Tab>
        <Tab title="Tab 4">Tab4</Tab>
        <Tab title="Tab 5">Tab5</Tab>
      </Tabs>

      <Accordion
        defaultIndex
        onChange={(index) => console.log(index)}
        collapseOthers={false} // Chỉ mở 1 mục cùng lúc
      >
        <AccordionItem header="Accordion 1">
          Nội dung của Accordion 1
        </AccordionItem>
        <AccordionItem header="Accordion 2">
          Nội dung của Accordion 2
        </AccordionItem>
        <AccordionItem header="Accordion 3">
          Nội dung của Accordion 3
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default App;
