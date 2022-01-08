import ContentGrid from './components/content'
import Header from './components/header'
import "antd/dist/antd.css"
import { useEffect, useRef } from 'react'
import { Affix, Button } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons/lib/icons';

function App() {
  const scrollEvent = useRef();

  const onScrollTo = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {

    const effect = window.addEventListener('scroll', function() {
      scrollEvent.current.hidden = (this.scrollY < scrollEvent.current?.clientHeight);
    });

    return () => {
      window.removeEventListener(effect);
    }
  }, [])

  return (
    <div className="App" >
      <Header />
      <ContentGrid />
      <Affix style={{ position:'fixed', right: 20, bottom: 30}}>
        <Button 
          onClick={onScrollTo}
          hidden 
          ref={scrollEvent} 
          type="dashed" 
          shape="circle"
        >
            <UpCircleOutlined style={{width: '100%', height: '100%'}} />
        </Button>
      </Affix>
    </div>
  )
}

export default App
