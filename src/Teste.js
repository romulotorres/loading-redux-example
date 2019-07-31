import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItem } from './actions/fake-actions'

class Teste extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render() {
    const { list, addItem, loading } = this.props
    return (
      <div className="App">
        <ul>
          {list.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
        <input value={this.state.value} onChange={e => this.setState({ value: e.target.value })} />
        <button
          onClick={() => {
            addItem(this.state.value)
          }}
        >
          Enviar
        </button>
        {loading && (
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'fixed',
              top: '0',
              right: '0',
              backgroundColor: 'rgba(255,255,255,.7)'
            }}
          >
            Carregando...
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.fake.list, loading: state.loading.count > 0 })
const mapDispatchToProps = dispatch => bindActionCreators({ addItem }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teste)
