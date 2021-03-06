/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the Tocsoft.GraphQLCodeGen toolchain https://github.com/tocsoft/GraphQLCodeGen
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming


interface fetchClient {
    fetch(url: RequestInfo, init: RequestInit): Promise<Response>
}

class GraphQLResponse
{
    data: any
    errors: Array<{ message: string }>
}

function GitHubTsError(message:string, httpResponse:Response, graphqlResponse?: GraphQLResponse) {
    this.name = 'GitHubTsError';
    this.message = message || 'Error fetching graphql response';
    this.stack = (new Error()).stack;
    this.httpResponse = httpResponse;
    if(graphqlResponse && graphqlResponse.errors){
        this.errors = graphqlResponse.errors.map(x=>x.message);
    }
  }
  GitHubTsError.prototype = Object.create(Error.prototype);
  GitHubTsError.prototype.constructor = GitHubTsError;
  
export { GitHubTsError }

export default class GitHubTsClient {

    constructor(public client: fetchClient, public url: string) { }
	
	addStar(	repositoyId :string) : Promise<AddStarResult>{
        return this.client.fetch(this.url, {
            method : 'POST',
            body : JSON.stringify({
                query : `{
  addStar(input: {clientMutationId: "123", starrableId: $repositoyId}){
    starrable{
      viewerHasStarred
    }
  }
}
`,
                variables : {
					repositoyId : repositoyId ,
                }
            })
        }).then(response=>{
            if(response.status != 200){
                // error result
                throw new GitHubTsError("http error running 'addStar', see httpResponse for more details.", response)
            }else{
                return response.json().then((json:GraphQLResponse)=>{
                    
                    if(json.errors && json.errors.length > 0){
                        throw new GitHubTsError("graphql error(s) running 'addStar', see errors collection fro more details", response, json)
                    }
                    
                    return AddStarResult.fromJS(json.data);
                })
            }
        })
    }	
	currentUser() : Promise<CurrentUserResult>{
        return this.client.fetch(this.url, {
            method : 'POST',
            body : JSON.stringify({
                query : `query {
  viewer{
    login
    bio
  }
}
`,
                variables : {
                }
            })
        }).then(response=>{
            if(response.status != 200){
                // error result
                throw new GitHubTsError("http error running 'currentUser', see httpResponse for more details.", response)
            }else{
                return response.json().then((json:GraphQLResponse)=>{
                    
                    if(json.errors && json.errors.length > 0){
                        throw new GitHubTsError("graphql error(s) running 'currentUser', see errors collection fro more details", response, json)
                    }
                    
                    return CurrentUserResult.fromJS(json.data);
                })
            }
        })
    }	
	search(	type :SearchType, 	query :string) : Promise<SearchResult>{
        return this.client.fetch(this.url, {
            method : 'POST',
            body : JSON.stringify({
                query : `query ($type: SearchType!, $query: String!) {
  viewer{
    login
  }
  search(first: 10, type: $type, query: $query){
    nodes{
      __typename
      ... on Issue {
        author{
          login
        }
      }
      ... on PullRequest {
        author{
          login
        }
      }
    }
  }
}
`,
                variables : {
					type : type ,
					query : query ,
                }
            })
        }).then(response=>{
            if(response.status != 200){
                // error result
                throw new GitHubTsError("http error running 'search', see httpResponse for more details.", response)
            }else{
                return response.json().then((json:GraphQLResponse)=>{
                    
                    if(json.errors && json.errors.length > 0){
                        throw new GitHubTsError("graphql error(s) running 'search', see errors collection fro more details", response, json)
                    }
                    
                    return SearchResult.fromJS(json.data);
                })
            }
        })
    }	
	usersRepositores(	login :string, 	repoCount :number) : Promise<UsersRepositoresResult>{
        return this.client.fetch(this.url, {
            method : 'POST',
            body : JSON.stringify({
                query : `query ($login: String!, $repoCount: Int!) {
  user(login: $login){
    login
    bio
    first: repositories(first: $repoCount){
      nodes{
        id
        name
        updatedAt
      }
    }
    last: repositories(last: $repoCount){
      nodes{
        id
        name
        updatedAt
      }
    }
  }
}
`,
                variables : {
					login : login ,
					repoCount : repoCount ,
                }
            })
        }).then(response=>{
            if(response.status != 200){
                // error result
                throw new GitHubTsError("http error running 'usersRepositores', see httpResponse for more details.", response)
            }else{
                return response.json().then((json:GraphQLResponse)=>{
                    
                    if(json.errors && json.errors.length > 0){
                        throw new GitHubTsError("graphql error(s) running 'usersRepositores', see errors collection fro more details", response, json)
                    }
                    
                    return UsersRepositoresResult.fromJS(json.data);
                })
            }
        })
    }	
}

export class AddStarResult {
		addStar? :AddStarPayloadResult;

    static fromJS(json:any):AddStarResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new AddStarResult();

result.addStar= AddStarPayloadResult.fromJS(json["addStar"]);

        return result;
    }
}

export class AddStarPayloadResult {
		starrable :StarrableResult;

    static fromJS(json:any):AddStarPayloadResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new AddStarPayloadResult();

result.starrable= StarrableResult.fromJS(json["starrable"]);

        return result;
    }
}

export class StarrableResult {
		viewerHasStarred :boolean;

    static fromJS(json:any):StarrableResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new StarrableResult();

	result.viewerHasStarred = json["viewerHasStarred"];

        return result;
    }
}

export class CurrentUserResult {
		viewer :UserResult;

    static fromJS(json:any):CurrentUserResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new CurrentUserResult();

result.viewer= UserResult.fromJS(json["viewer"]);

        return result;
    }
}

export class UserResult {
		login :string;
		bio? :string;

    static fromJS(json:any):UserResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new UserResult();

	result.login = json["login"];
	result.bio = json["bio"];

        return result;
    }
}

export class SearchResult {
		viewer :User1Result;
		search :SearchResultItemConnectionResult;

    static fromJS(json:any):SearchResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new SearchResult();

result.viewer= User1Result.fromJS(json["viewer"]);
result.search= SearchResultItemConnectionResult.fromJS(json["search"]);

        return result;
    }
}

export class User1Result {
		login :string;

    static fromJS(json:any):User1Result{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new User1Result();

	result.login = json["login"];

        return result;
    }
}

export class SearchResultItemConnectionResult {
		nodes? :Array<SearchResultItemResult>;

    static fromJS(json:any):SearchResultItemConnectionResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new SearchResultItemConnectionResult();

if(json["nodes"]){ 
		result.nodes = json["nodes"].map(v=>SearchResultItemResult.fromJS(v) );	
	}

        return result;
    }
}

export class SearchResultItemResult {
		__typename :string;
		author? :ActorResult;

    static fromJS(json:any):SearchResultItemResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new SearchResultItemResult();

	result.__typename = json["__typename"];
result.author= ActorResult.fromJS(json["author"]);

        return result;
    }
}

export class ActorResult {
		login :string;

    static fromJS(json:any):ActorResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new ActorResult();

	result.login = json["login"];

        return result;
    }
}

export class UsersRepositoresResult {
		user? :User2Result;

    static fromJS(json:any):UsersRepositoresResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new UsersRepositoresResult();

result.user= User2Result.fromJS(json["user"]);

        return result;
    }
}

export class User2Result {
		login :string;
		bio? :string;
		first :RepositoryConnectionResult;
		last :RepositoryConnectionResult;

    static fromJS(json:any):User2Result{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new User2Result();

	result.login = json["login"];
	result.bio = json["bio"];
result.first= RepositoryConnectionResult.fromJS(json["first"]);
result.last= RepositoryConnectionResult.fromJS(json["last"]);

        return result;
    }
}

export class RepositoryConnectionResult {
		nodes? :Array<RepositoryResult>;

    static fromJS(json:any):RepositoryConnectionResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new RepositoryConnectionResult();

if(json["nodes"]){ 
		result.nodes = json["nodes"].map(v=>RepositoryResult.fromJS(v) );	
	}

        return result;
    }
}

export class RepositoryResult {
		id :string;
		name :string;
		updatedAt :Date;

    static fromJS(json:any):RepositoryResult{
        if(json == null || json == undefined){
            return null;
        }
        
        var result = new RepositoryResult();

	result.id = json["id"];
	result.name = json["name"];
result.updatedAt = json["updatedAt"] ? new Date(json["updatedAt"]) : null;

        return result;
    }
}


	export enum SearchType
	{
		ISSUE = "ISSUE",
		REPOSITORY = "REPOSITORY",
		USER = "USER",
	}

