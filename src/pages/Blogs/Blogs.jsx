import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="mt-8 mb-8">
      <Helmet>
        <title>Wheelie World | Blogs</title>
      </Helmet>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>An access token and a refresh token are commonly used in authentication and authorization protocols. An access token is issued by an authentication server after successful authentication. It is typically short-lived credential and has an expiration time. Refresh token is also issued by the authentication  and it is a long-lived credential that is used to obtain a new access token once the current access token expires. When a user login in a application the authentication server generates an access token and a refresh token and sends them back to the client uses it to make requests to protected resources. If the refresh token is valid and not expired, the authentication server provides a new access token to the client, and the client updates its stored access token. Best practices recommend storing the access token in a secure HTTP-only cookie.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases.
          </div>
          <div className="collapse-content">
            <p>SQL (Structured Query Language) and NoSQL (Not Only SQL) are two categories of databases that differ in their data models, storage structures, querying capabilities, and use cases. SQL databases use a structured, tabular data model where data is organized into tables with fixed columns and rows. NoSQL databases uses various data models, such as key-value, document, columnar, or graph.  SQL databases typically scale vertically, which means increasing the resources of a single server but NoSQL databases are scale horizontally, allowing for easy distribution of data across multiple servers. SQL databases are commonly used for applications that require strong consistency, complex querying, and transactional support and NoSQL databases are well-suited for scenarios where high scalability, flexible data models, and rapid development are essential.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          What is Express js? What is Nest JS?
          </div>
          <div className="collapse-content">
            <p>Express.js and Nest.js are both popular web application frameworks for building server-side applications using JavaScript. Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple approach to building web applications and APIs. Express.js focuses on providing a robust set of features for handling HTTP requests, routing, and managing server-side logic. It allows us to quickly build lightweight and scalable web applications. Nest.js is a progressive Node.js framework built with TypeScript. It is designed to provide a structured and scalable architecture for building server-side applications. Nest.js is includes powerful features like routing, middleware, validation, and built-in support for WebSockets, GraphQL, and other technologies. It aims to enhance our productivity and code maintainability by enforcing strong architectural patterns.</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work
          </div>
          <div className="collapse-content">
            <p>MongoDB aggregate is a framework for MongoDB and a powerful tool used for performing advanced data analysis and aggregation operations on collections of documents.  It allows us to process data and transform it in various ways, such as filtering, grouping, sorting, joining, and computing. The aggregate framework provides a wide range of powerful operators and expressions to perform complex data transformations, calculations, and aggregations. It enables us to analyze data in a flexible and efficient manner directly within the database, without the need for client-side processing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
