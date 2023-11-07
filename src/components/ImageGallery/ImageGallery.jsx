import React, { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import axios from "axios";
import css from "./Styles.module.css"

class ImageGallery extends Component {
    state = {
        images: null,
        loading: false,
    }

    async componentDidUpdate() {
        const API_KEY = '35871708-bbfa936b0bfd126629100243d';

        try {
            const { data } = await axios.get(`https://pixabay.com/api/?q=${this.props.imagesName}&page=${this.props.onPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            this.setState({ images: data, currentPage: 1 })
        } catch (error) {
            console.error(error)
        }
    }





    // ========================================================================================================================================


    // ========================================================================================================================================

    render() {
        const { images, loading } = this.state;

        return (
            <div className={css.ImageGallery}>
                {loading && <p>Loading</p>}
                {!images && <p>Fiell search for results</p>}
                {images &&
                    <ul

                    >
                        {this.state.images.hits.map(image => (
                            <ImageGalleryItem image={image} />
                        ))}
                    </ul>
                }
            </div>
        );
    };
};

export default ImageGallery;