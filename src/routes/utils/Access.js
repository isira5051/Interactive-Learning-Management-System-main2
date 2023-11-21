const Access ={
    User: ['reader'],
    BookView: ['reader'],
    Forum: ['reader'],
    BookHistory:['reader'],
    Profile:['reader'],
    Notification:['reader'],
    Librarian: ['librarian'],
    AddBook: ['librarian'],
    BookReturns: ['librarian'],
    UserList: ['librarian','admin'],
    BookList: ['librarian'],
    RequestList: ['librarian'],
    Reports: ['librarian','admin'],
    ReportMostReadBooks: ['librarian','admin'],
    ReportOverdueReturns: ['librarian','admin'],
    ReportUserFines: ['librarian','admin'],
    LibrarianData:['admin'],
    RemovePosts:['admin'],
    CommonForum:['admin','librarian','reader'],
    Admin:['admin']
}
export default Access;