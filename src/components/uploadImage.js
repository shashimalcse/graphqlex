import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'





const UPLOAD_MUTATION = gql`
  mutation UploadMutation($url: String!) {
    uploadFile(url: $url) {
      url
    }
  }
`

export default class uploadImage extends Component {
    state = {
        selectedFile: null,
        url: ''
    }
    fileSelectedHandler = event => {

        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    // fileUploadHandler = async () => {
    //     const  url= 'jhsdj'
    //     await this.setState({
    //         url:url
    //     })
    //     console.log(this.state)


    // }
    render() {
        const geturl = () => {
            const url = 'jhsdj'
            return url
        }

        return (
            <div>

                <Mutation mutation={UPLOAD_MUTATION}
                    onCompleted={() => this.props.history.push('/')}>
                    {(uploadMutation) => (
                        <div>
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    const url = geturl()
                                    console.log(url)
                                    uploadMutation({ variables: { url:url} });

                                }}
                            >
                                <input type="file" onChange={this.fileSelectedHandler}

                                />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}
                </Mutation>
            </div>
        )
    }
}
