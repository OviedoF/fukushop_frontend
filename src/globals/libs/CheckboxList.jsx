import React from 'react';
import styles from './CheckboxList.module.scss'

class CheckboxList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        type: 'checkbox', // change this between 'radio' and 'checkmark' for different input control
        selection: []
      };
      this.handleFilters = this.props.handleFilters;
      this.filterName = this.props.filterName;
      this.filters = this.props.filters;
      this.props = props;
      this.activeDefault = true;
    }
    
    /**
    * This method controls the logic of the form.
    * Depending on the form type (defined in this.state.type)
    **/
    toggleSelection(id) {
      const { type, selection } = this.state;
      
      if (type === 'checkbox') { // logic as checkbox
        if (selection.includes(id)) {
          this.setState({ selection: selection.filter(sel => sel !== id)});
          if(this.props.default && this.props.default === id) {
            this.activeDefault = false;
          }
          // Opcional
          this.props.handleFilters(this.filterName, selection.filter(sel => sel !== id));
        } else {
          this.setState({ selection: [...selection, id] });
          // Opcional
          this.props.handleFilters(this.filterName, [...selection, id]);
        }

      } else { // logic as radio-button
        this.setState({ selection: [id] });
        this.props.handleFilters(this.filterName, selection);
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.props.default && this.activeDefault && !this.state.selection.includes(this.props.default)) {
        this.setState({ selection: [this.props.default] });
      }
    }
    
    
    render() {
      const { selection } = this.state;
      const { items } = this.props;
      
      return (
        <ul className={styles.selectionable_items}>
          {items && items.map((item, i) => 
            <Checkbox 
              key={i}
              selected={selection.includes(item._id)} 
              onClick={() => this.toggleSelection(item._id)}
              label={item.name}
            />
          )}
        </ul>
      );
    }
  }
  
  class Checkbox extends React.PureComponent {
    render() {
      const { selected, onClick, label, effect='checkmark' } = this.props; // label is the only optional prop
      const length = 126.36953735351562; // hard-coded length dependent on the path used
      
      return (
        <li className={styles.selectionable_items__item} onClick={onClick}>
          <span className={styles.box} />
          
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" >
            <path
              stroke='lightgreen'
              strokeWidth="14"
              fill="none"
              d='M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16'
              strokeDashoffset={selected ? 0 : length}
              style={{strokeLinecap: 'round', strokeLinejoin: 'round', transition: 'stroke-dashoffset 0.2s ease-in-out', strokeDasharray: `${length} ${length}`}}
            />
          </svg>

          {label && <span className={styles.label} style={{color: selected ? 'lightgreen':'white'}}>{label}</span>}
        </li>
      );
    }
  }

export default CheckboxList;