import React, {Component} from 'react';

export default class PlatformFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            platforms: [],
            isLoaded: null
        }
    }

    componentDidMount() {
        fetch(`/sites/gejm/public/api/platforms`)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                this.setState({ 
                    isLoaded: true,
                    platforms: result });
            }, 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render() {
        return (
            <div>
                <p>Platformy</p>
                <section className="platform-filter">
                {
                    this.state.platforms.map( (platform, key) => (
                        <span name={platform.name} className="platform-filter__name" key={key}>
                            {platform.name}&nbsp;                  
                        </span>
                    ))
                }
                </section>
            </div>
            
        )
    }
}