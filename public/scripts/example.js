/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

 var data = [
   {id: 1, author: "Pete Hunt", text: "This is one comment"},
   {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
 ];

 var CommentBox = React.createClass({
   render: function() {
     return (
       <div className="commentBox">
         <h1>Comment Box</h1>
         <CommentList data={this.props.data}/>
         <CommentForm />
       </div>
     )
   }
 })

 var CommentList = React.createClass({
   render: function() {
     var comments = this.props.data.map(function(comment) {
       return (
         <Comment author={comment.author} id={comment.id}>
           {comment.text}
         </Comment>
       )
     })

     return (
       <div className="commentList">
         {comments}
       </div>
     );
   }
 });

 var Comment = React.createClass({
   rawMarkup: function() {
     var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
     return { __html: rawMarkup };
   },

   render: function() {
     return (
       <div className="comment">
         <h2 className="commentAuthor">{ this.props.author }</h2>
         <span dangerouslySetInnerHTML={this.rawMarkup()} />
       </div>
     )
   }
 })

 var CommentForm = React.createClass({
   render: function() {
     return (
       <div className="commentForm">
         Hello, world! I am a CommentForm.
       </div>
     );
   }
 });

 ReactDOM.render(<CommentBox url="/api/comments/" />, document.getElementById("content"))
