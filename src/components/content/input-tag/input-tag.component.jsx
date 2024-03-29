import React from 'react';
import './input-tag.component.css';

const categories = ['category1', 'category2', 'category3'];

class InputTag extends React.Component {
    constructor() {
      super();
      
      this.state = {
        tags: [...categories]
      };
    }
    
    removeTag = (i) => {
      const newTags = [ ...this.state.tags ];
      newTags.splice(i, 1);
      this.setState({ tags: newTags }, () => this.props.setCategories(this.state.tags));
    }
  
    inputKeyDown = (e) => {
      const val = e.target.value;
      if (e.key === 'Enter' && val) {
        if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
          return;
        }
        this.setState({ tags: [...this.state.tags, val]}, () => this.props.setCategories(this.state.tags));
        this.tagInput.value = null;
      } else if (e.key === 'Backspace' && !val) {
        this.removeTag(this.state.tags.length - 1);
      }
    }
  
    render() {
      const { tags } = this.state;
  
      return (
        <div className="input-tag">
          <ul className="input-tag__tags">
            { tags.map((tag, i) => (
              <li key={tag}>
                {tag}
                <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
              </li>
            ))}
            <li className="input-tag__tags__input"><input type="text" onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
          </ul>
        </div>
      );
    }
  }
  
  export default InputTag;
  