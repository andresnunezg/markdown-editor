import React from 'react';
import marked from 'marked';

import { DocumentTextIcon } from '@heroicons/react/outline';
import './styles/Previewer.css'

class Previewer extends React.Component {
    markdownConvert = () => {
        const rawMD = marked(this.props.textMarkdown, {sanitize: true});
        return (
            {__html: rawMD}
        );
    }
    render () {
        return (
            <section id="previewer">
                <div className="Title__container TitlePreviewer">
                    <div className="TitlePreviewer__left">
                        <DocumentTextIcon className="Icon__title" />
                        <h1>Vista previa</h1>
                    </div>
                    <div className="TitlePreviewer__right">
                        <button onClick={this.props.handleClick} id="download" type="button" className="TitlePreviewer__action-download">
                            Descargar&nbsp;
                            <i className="fas fa-download"></i>
                        </button>
                    </div>
                </div>
                <div className="TextPreview__container" dangerouslySetInnerHTML={this.markdownConvert()} />
            </section>
        )
    };
}

export default Previewer;