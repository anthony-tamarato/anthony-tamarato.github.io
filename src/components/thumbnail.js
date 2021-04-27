import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';


export class Thumbnail extends Component{
    
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { show: false };
        this.showLightbox = this.showLightbox.bind(this);
        this.closeLightBox = this.closeLightBox.bind(this);
      }

    showLightbox(){
        this.setState({
            show : true
        });
    }

    closeLightBox(){
        this.setState({
            show : false
        });
    }

    render(){
        const { show } = this.state;
        const { demo, code, title, image, description} = this.props;

        return(
            <>
            <div className="col-4 col-6-medium col-12-small canClick" onClick={this.showLightbox}>
                <h3 className="project-title">{title}</h3>
                <div className="image fit">
                    <img src={image} />
                </div>
            </div>

            <CSSTransition
                in={show}
                timeout={300}
                unmountOnExit
                classNames="alert"
            > 
                <div className="lightbox">
                    <button onClick={this.closeLightBox} className="closeButton">X</button>
                    <h2 className="project-title">{title}</h2>
                    <p>{description}</p>
                    <div>
                        {demo !== "#" &&
                            <a href={demo} className="button project-link" target="_blank">View</a>
                        }
                        {code !== "#" &&
                            <a href={code} className="button project-link" target="_blank">Code</a>
                        }
                    </div>
                </div>
            </CSSTransition>
            </>
        );
    }
}

export default Thumbnail