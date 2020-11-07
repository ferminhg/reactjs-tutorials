import React, { Component } from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
import Add from './Add';
import { getVideos } from '../api';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            videos: null,
            error: null,
            showAdd: false,
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleCloseAdd = this.handleCloseAdd.bind(this);
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
    handleAdd(e) {
        e.preventDefault();
        this.setState({showAdd: true});
    }
    handleCloseAdd(reload){
        return () => {
          if(reload){
            this.setState({ isLoading: true , showAdd:false});
            getVideos().then(data => this
              .setState({ videos: data, isLoading: false, showAdd:false }))
              .catch(error => this.setState({ error, isLoading: false, showAdd:false }));
          } else {
            this.setState({ showAdd: false });
          }
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
            <Header onClickAdd={this.handleAdd}/>
            <div className="container">
                <div className="grid-container">
                    {
                        videos && videos.map((video, i) => {
                            return (<Item key={i} data={video}/>)
                        })
                    }
                </div>
            </div>
            { this.state.showAd && (<Add onClose={this.handleCloseAdd}/>) }
        </React.Fragment>);
    }
}

export default List;