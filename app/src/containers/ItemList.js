import { connect } from 'react-redux';
import List from "../components/List";

function mapStateToProps(state) {
    const { items } = state;
    return { items: items}
}

export default connect(
    mapStateToProps,
    null
)(List);
