import { useState, useContext, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Content from '../Content/Content';
import NewsContext from '../../context/NewsContext';

function FiltersNav() {
  const [key, setKey] = useState<string>('maisRecentes');
  const { setFilter } = useContext(NewsContext);

  useEffect(() => {
    setFilter(key);
  }, [key, setFilter]);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={ key }
      onSelect={ (k: any) => setKey(k) }
      className="mb-3"
      style={ { width: '70%',
        margin: '0 auto' } }
    >
      <Tab
        eventKey="maisRecentes"
        title="Mais recentes"
        style={ { width: '70%',
          margin: '0 auto' } }
      >
        <Content />
      </Tab>
      <Tab
        eventKey="Release"
        title="Releases"
        style={ { width: '70%',
          margin: '0 auto' } }
      >
        <Content />
      </Tab>
      <Tab
        eventKey="Notícia"
        title="Notícias"
        style={ { width: '70%',
          margin: '0 auto' } }
      >
        <Content />
      </Tab>
      <Tab
        eventKey="favoritos"
        title="Favoritos"
        style={ { width: '70%',
          margin: '0 auto' } }
      >
        favoritos
      </Tab>
    </Tabs>
  );
}

export default FiltersNav;
