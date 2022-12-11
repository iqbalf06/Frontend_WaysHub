import React from "react";
import { Container, Row, Col, Stack, Image, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import Thumbnail1 from "../assets/images/Thumbnail1.png"
import Thumbnail2 from "../assets/images/Thumbnail2.png"
import Thumbnail3 from "../assets/images/Thumbnail3.png"
import Thumbnail4 from "../assets/images/Thumbnail4.png"
import Thumbnail5 from "../assets/images/Thumbnail5.png"
import Thumbnail6 from "../assets/images/Thumbnail6.png"
import Thumbnail7 from "../assets/images/Thumbnail7.png"
import Thumbnail8 from "../assets/images/Thumbnail8.png"

import ViewsIcon from "../assets/icon/ViewsIcon.svg"
import DateIcon from "../assets/icon/DateIcon.svg"
import { useQuery } from "react-query";
import { API } from "../config/api";

function VideoList() {

    let { data: getallvideos } = useQuery('allvideosCaches', async () => {
        const response = await API.get('/videos');
        return response.data.data;
      });
      console.log(getallvideos, "getall?");

    const navigate = useNavigate()

    const handleView = async (id,request) => {
        const response = await API.patch('/views/'+id);
        navigate("/videodetail/"+id)
    }
    return(
        <>
            <Container className="py-0 px-5" style={{marginTop:'10%'}}>
                <Row lg={4} >
                    {getallvideos?.map(element => (
                    <Col onClick={() => handleView(element.id)} style={{marginTop:'2%'}}>
                        <Stack direction="vertical">
                            <Image src={element.thumbnail} className="btn mb-2 p-0" />
                            <Card.Text className="text-white mb-3" style={{fontSize:'15px'}}>{element.title}</Card.Text>
                            <Card.Text className="fs-6 mb-2" style={{color:'#555555'}}>{element.channel.channelName}</Card.Text>
                            <Row>
                                <Col md={4}>
                                    <Stack direction="horizontal">
                                        <div className="d-flex flex-column justify-content-center me-2">
                                            <Image src={ViewsIcon}/>
                                        </div>
                                        <Card.Text className="fs-6" style={{color:'#555555'}}>{element.viewcount}</Card.Text>
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
                        </Stack>
                    </Col>
                    ))}

                    
                </Row>
            </Container>
        </>
    )
}

export default VideoList