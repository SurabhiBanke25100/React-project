
import Accordion from '../components/Accordion';

function AccordionPage() {
  const items=[
  {
    id:'346gjkj',
    label:'can i use react on a project?',
    content:'you can use react any time'
  },
  {
    id:'rty621',
    label:'can i use javascript on project?',
    content:'you can use js one time'
  }

  ] 
  return <Accordion items={items}/>;

  }

export default AccordionPage;
