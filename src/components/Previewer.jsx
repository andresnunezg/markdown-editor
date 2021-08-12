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
                <div className="Title__container">
                    <DocumentTextIcon className="Icon__title" />
                    <h1>Vista previa</h1>
                </div>
                <div className="TextPreview__container" dangerouslySetInnerHTML={this.markdownConvert()} />
            </section>
        )
    };
}

export default Previewer;