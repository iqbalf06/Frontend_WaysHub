import { useContext, useEffect } from 'react';
import { Container, Row, Col, Image, Card, Stack, Button, CardImg } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API, setAuthToken } from "../config/api";
import { UserContext } from '../context/userContext';    

import Cover from "../assets/images/blank-cover.png"
import Foto from "../assets/images/blankphoto.png"

import Thumbnail1 from "../assets/images//bbq1.png"
import Thumbnail2 from "../assets/images//bbq2.png"
import Thumbnail3 from "../assets/images//bbq3.png"
import Thumbnail4 from "../assets/images//bbq4.png"

import ViewsIcon from "../assets/icon/ViewsIcon.svg"
import DateIcon from "../assets/icon/DateIcon.svg"

function MyChannel() {

    const [state, dispatch] = useContext(UserContext);

    useEffect(() => { 
        // Redirect Auth
        if (state.isLogin == false) {
          navigate('/auth');
        } 
    
        setAuthToken(localStorage.token)
      }, [state]);

    let { data: mychannel } = useQuery('mychannelCache', async () => {
        const response = await API.get('/mychannel');
        return response.data.data;
      });
      console.log(mychannel, "ada?");

    const id = mychannel?.id
    console.log(id, "ada");

      let { data: creatorvideo } = useQuery('creatorvideoCache', async () => {
        const response = await API.get('/creator/'+id);
        return response.data.data;
      });
      console.log(creatorvideo, "ada?");

      
    const handleView = async (id) => {
        const response = await API.patch('/views/'+id);
        navigate("/videodetail/"+id)
    }
    const navigate = useNavigate()

    return(
        <>
             
            <Image src={mychannel?.cover === "" ? Cover : mychannel?.cover} style={{height:'18vh', width:'100%', marginTop:'10%', objectFit:'cover'}}/>           
            <Container className="px-5 mt-4">
        
                        <Stack direction="horizontal" className="mb-1">

                            <Image src={mychannel?.photo === "" ? Foto : mychannel?.photo} style={{width:"60px", height:"60px", borderRadius:"10px", objectFit:"cover"}} className="me-4" />
                            <Stack direction="vertical">
                                <Card.Text className="text-white fs-3 mb-0">{mychannel?.channelName}</Card.Text>
                                <Card.Text style={{color:'#F0F0F0'}}>120K Subscriber</Card.Text>
                            </Stack>
                            <Button onClick={() => navigate('/editchannel')} className="py-2" style={{ backgroundColor: '#FF7A00', border: 'none', width: '15%' }}>
                                Edit Channel
                            </Button>
                        </Stack>
                   
                <Stack direction="horizontal" gap={5}>
                    <div>
                        <Card.Text className="text-white btn p-0 m-0">Video</Card.Text>
                    </div>
                    <div>
                        <Card.Text className="text-white btn p-0 m-0">Channel Description</Card.Text>
                    </div>
                </Stack>

                        
                <hr style={{borderTop:'3px solid #C2C2C2', marginTop:'0'}} />

                <Row lg={4} >
                    {creatorvideo?.map(element => (
                    <Col className="mb-1" onClick={() => handleView(element.id)} >
                        <Card style={{background:"none", cursor:'pointer'}} className="text-secondary">
                            <CardImg src={element?.thumbnail} alt="thumbnail" className="mb-2"/>
                            <Card.Title className="text-white" style={{fontSize:"15px"}}>{element?.title}</Card.Title>
                            <Card.Subtitle style={{fontSize:'13px'}}>{element?.channel.channelName}</Card.Subtitle>
                            <Card.Footer>
                            <Row>
                                <Col md={4}>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={ViewsIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>{element?.viewcount}</Card.Text>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={DateIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>12 Des 2022</Card.Text>
                                    </Stack>
                                </Col>
                            </Row>
                            </Card.Footer>
                        </Card>
                        
                    </Col>
                         ))}


                </Row>
            </Container>
        </>
    )
}

export default MyChannel