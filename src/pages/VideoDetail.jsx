import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import SideVideoList from "../components/detailVideo/SideVideoList"
import Videos from "../components/detailVideo/Video"
import {useParams} from"react-router-dom"
import { API } from "../config/api";
import { useQuery } from "react-query";

function VideoDetail() {

    const {id} = useParams()
    let { data: videodetail } = useQuery('videodetailCaches', async () => {
        const response = await API.get('/video/'+id);
        return response.data.data;
      });

      const datavideo = {
        title: videodetail?.title,
        video: videodetail?.video,
        description: videodetail?.description,
        viewcount: videodetail?.viewcount,
      }
      console.log(videodetail, "ada ga ni?");

    return (
        <Container direction="vertical" className="p-0" style={{marginTop:'10%'}}>
            <Row lg={2} className="m-0 p-0">
                <Col lg={8} className="m-0 p-0">

                    <Videos response={datavideo} />

                </Col>
                <Col lg={4} className="m-0 p-0">
                    <SideVideoList />
                </Col>
            </Row>
        </Container>
    )
}

export default VideoDetail