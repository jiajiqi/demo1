import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Input, Carousel, Icon, Button } from 'antd';

<<<<<<< HEAD:src/HomePage/homepage.js
var HomePageCss = require('./homepage.css')
export default class HomePage extends React.Component {
    render() {
        return (
=======
var HomeCss= require('./homepage.css')
export default class Home extends React.Component{
    render(){
        return(
>>>>>>> 28593d7bcc30faa21ddf031be7dc3c174ae9af74:src/pages/Home/home.js
            <div>
                <div className={HomeCss.headline}>
                    <Row type="flex" justify="space-around">
                        <Col span={24}></Col>
                    </Row>
                </div>

<<<<<<< HEAD:src/HomePage/homepage.js
                <div className={HomePageCss.firstline}>
                    <Row type="flex" justify="space-around">
                        <Col span={3}></Col>
                        <Col span={2}>
                            名称
                    </Col>
                        <Col span={6}>
                            <Input.Search placeholder="搜索"
                                onSearch={value => console.log(value)} style={{ width: 250 }} />
                        </Col>
                        <Col span={2.1}>
                            <Link className={HomePageCss.f}>首页</Link>
                        </Col>
                        <Col span={1.9}>
                            <Link className={HomePageCss.f}>我们的服务</Link>
                        </Col>
                        <Col span={1.5}>
                            <Link className={HomePageCss.f}>新的动态</Link>
                        </Col>
                        <Col span={2}>
                            <Link className={HomePageCss.f}>联系我们</Link>
                        </Col>
                        <Col span={1.2}>
                    <Link className={HomePageCss.f}><Button type="primary" style={{fontSize:'8px'}}  ><p>登录</p></Button></Link>
=======
                <div className={HomeCss.firstline}>
                <Row type="flex" justify="space-around">
                    <Col span={3}></Col>
                    <Col span={2}>
                        名称
                    </Col>
                    {/* <Col span={7}>
                    <Input.Search placeholder="搜索"
                     onSearch={value => console.log(value)} style={{ width: 250 }}/>
                    </Col>
                    <Col span={1}>
                        <Link className={HomeCss.f}>首页</Link>
                        </Col>
                    <Col span={2}>
                        <Link className={HomeCss.f}>我们的服务</Link>
                    </Col>
                    <Col span={2}>
                        <Link className={HomeCss.f}>新的动态</Link>
                        </Col>
                    <Col span={2}>
                        <Link className={HomeCss.f}>联系我们</Link>
                    </Col> */}
                    {/* <Col span={1}>
                    <Link className={HomeCss.f}><Button type="primary">登录</Button></Link>
>>>>>>> 28593d7bcc30faa21ddf031be7dc3c174ae9af74:src/pages/Home/home.js
                    </Col>
                    <Col span={0.2}>
                    <p>|</p>
                    </Col>
<<<<<<< HEAD:src/HomePage/homepage.js
                    <Col span={2.3}>
                    <Link className={HomePageCss.f}><Button type="primary" style={{fontSize:'8px'}}><p>注册</p></Button></Link>
                    </Col> 
                    </Row>
=======
                    <Col span={1}>
                    <Link className={HomeCss.f}><Button type="primary">注册</Button></Link>
                    </Col> */}
                </Row>
>>>>>>> 28593d7bcc30faa21ddf031be7dc3c174ae9af74:src/pages/Home/home.js
                </div>
                <div className={HomeCss.secondline}>
                    <Row>
<<<<<<< HEAD:src/HomePage/homepage.js
                        <Col span={24}>
                            <Carousel autoplay className={HomePageCss.l}>
=======
                    <Col span={24}>
                    <Carousel autoplay className={HomeCss.l}>
>>>>>>> 28593d7bcc30faa21ddf031be7dc3c174ae9af74:src/pages/Home/home.js
                        <div>
                           <img src="/taylor.jpg" width={'100%'} height={380}></img>
                        </div>
                        <div>
                           <img src="/taylor.jpg" width={'100%'} height={380}></img>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel> 
                        </Col>
                    </Row>
                </div>
                <div className={HomeCss.lastline}>
                    <Row>
<<<<<<< HEAD:src/HomePage/homepage.js
                        <Col span={2}></Col>
                        <Col span={5}>
                            <div className={HomePageCss.phone}>
                                <Icon type="home" style={{ fontSize: '40px' }} className={HomePageCss.phone1} />
                                <p >首页</p>
                            </div>
                        </Col>
                        <Col span={5}>
                            <div className={HomePageCss.phone}>
                                <Icon type="user" style={{ fontSize: '40px' }} className={HomePageCss.phone1} />
                                <p >个人主页</p>
                            </div>
                        </Col>
                        <Col span={5}>
                            <div className={HomePageCss.phone}>
                                <Icon type="sketch" style={{ fontSize: '40px' }} className={HomePageCss.phone1} />
                                <p >会员中心</p>
                            </div>
                        </Col>
                        <Col span={5}>
                            <div className={HomePageCss.phone}>
                                <Icon type="phone" style={{ fontSize: '40px' }} className={HomePageCss.phone1} />
                                <p >在线客服</p>
                            </div>
                        </Col>
                        <Col span={2}></Col>
=======
                    <Col span={2}></Col>
                    <Col span={5}>
                    <div className={HomeCss.phone}>
                            <Icon type="home" style={{fontSize:'40px'}} className={HomeCss.phone1}/>
                            <p >首页</p>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className={HomeCss.phone}>
                            <Icon type="user" style={{fontSize:'40px'}} className={HomeCss.phone1}/>
                            <p >个人主页</p>
                        </div>
                    </Col>
                    <Col span={5}>
                    <div className={HomeCss.phone}>
                            <Icon type="sketch" style={{fontSize:'40px'}} className={HomeCss.phone1}/>
                            <p >会员中心</p>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className={HomeCss.phone}>
                            <Icon type="phone" style={{fontSize:'40px'}} className={HomeCss.phone1}/>
                            <p >在线客服</p>
                        </div>
                    </Col>
                    <Col span={2}></Col>
>>>>>>> 28593d7bcc30faa21ddf031be7dc3c174ae9af74:src/pages/Home/home.js
                    </Row>
                </div>
                <div className={HomeCss.addline}>
                    <Row>
                        <Col span={24}>附加</Col>
                    </Row>
                </div>
            </div>
        )
    }
}