import React, { Component } from 'react';
import Loading from './Loading';
import Item from './Item'

import { getVideos } from '../api';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            videos: null,
            error: null,
        }
    }
    //sitio ideal para realizar llamadas externas
    async componentDidMount() {
        // Promises example
        // this.setState({isLoading: true});
        // getVideos().then(data => {
        //     this.setState({ isLoading: false , videos:data});
        // })
        try {
            const videos = await getVideos();
            this.setState({videos, isLoading: false});
        } catch(error) {
            this.setState({error, isLoading:false });
        }
    }
    render() {
        const { videos, isLoading, error } = this.state;
        if (error) {
            return (<div>ERROR</div>);
        }
        if (isLoading) {
            return (<Loading message="Cargando wopwop ..."/>);
        }
        return (<React.Fragment>
            <div className="container">
                <div className="grid-container">
                    {
                        videos && videos.map((video, i) => {
                            return (<Item key={i} data={video}/>)
                        })
                    }
                </div>
            </div>
        </React.Fragment>);
    }
}

export default List;