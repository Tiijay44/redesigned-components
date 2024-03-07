import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "idhgs",
      label: "Can i use Javascript to create an accordion?",
      content:
        "Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion",
    },
    {
      id: "dhjjsa",
      label: "Can i use React to create an accordion?",
      content:
        "Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion",
    },
    {
      id: "sgvasu",
      label: "Can i use CSS to create an accordion?",
      content:
        "Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion Yes you can use any framework of your choice to create an accordion",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
