# NestJS

강의 레퍼런스
https://www.youtube.com/watch?v=3JminDpCJNE

## NestJs cli 명령어 설치

```bash
npm i -g @nestjs/cli
```

## 프로젝트 설치

```bash
nest new ./
```

## 프로젝트 실행

```
# dev
npm run start:dev
```

## NestJs 명령어

### 모듈 생성 (Module)

| 코드   | 설명                            |
| ------ | ------------------------------- |
| nest   | using nestcli                   |
| g      | generate                        |
| module | schematic that i want to create |
| boards | name of the schematic           |

```bash
nest g module boards
```

### 컨트롤러 생성 (Controller)

| 코드       | 설명                            |
| ---------- | ------------------------------- |
| nest       | using nestcli                   |
| g          | generate                        |
| controller | schematic that i want to create |
| boards     | name of the schematic           |
| --no-spec  | 테스트를 위한 소스코드 생성 x   |

```bash
nest g controller boards --no-spec
```

### 서비스 생성 (Service)

| 코드      | 설명                            |
| --------- | ------------------------------- |
| nest      | using nestcli                   |
| g         | generate                        |
| service   | schematic that i want to create |
| boards    | name of the schematic           |
| --no-spec | 테스트를 위한 소스코드 생성 x   |

---

## NestJs 용어 설명

### Controller란?

컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환합니다.

컨트롤러는 @Controller 데코레이터로 클래스를 데코레이션하여 정의됩니다.

```javascript
@Controller('boards')
export class BoardsController {}
```

### Handler란?

핸들러는 @Get, @Post, @Delete 등과 같은 데코레이터로 장식 된
컨트롤러 클래스 내의 단순한 메서드입니다.

```javascript
@Controller('boards')
export class BoardsController {
  @Get()
  getBoards(): string {
    return 'This action returns all boards';
  }
}
```

### Service란?

- 간단 설명
  Service 안에서는 데이터베이스 관련된 로직을 처리합니다. 데이터베이스에서 데이터를 가져오거나
  데이터베이스안에 게시판 생성할때 그 생성한 게시판 정보를 넣어주는 등의 로직을 처리합니다.

- @Injectable데코레이터

`@Injectable` 데코레이터를 통해서 NestJS는 이것을 이용해서 다른 컴포넌트에서 이 서비스를 사용 할 수 있게(Injectable)만들어줍니다.

```javascript
@Injectable()
export class BoardsService {}
```

- Service를 Controller에서 이용할 수 있게 해주기(Dependency Injection)

NestJs에서 Dependency Injection은 클래스의 Constructor안에서 이루어집니다.

```javascript
import {Controller} from '@nestjs/common'
import {BoardsService} from './boards.service'

@Controller("boards")
export class BoardsController {
  constructor(private boardsService:BoardsService) {}
}
```

- 구체화 설명
  서비스는 소프트웨어 개발내의 공통 개념이며, NestJS, Javascript에서만 쓰이는 개념이 아닙니다.
  @Injectable 데코레이터로 감싸져서 모듈에 제공되며, 이 서비스 인스턴스는 애플리케이션 전체에서 사용 될 수 있습니다.
  서비스는 컨트롤러에서 데이터의 유효성 체크를 하거나 데이터베이스에 아이템을 생성하는 등의 작업을 하는 부분을 처리합니다.

### Provider란?

프로바이더는 Nest의 기본 개념입니다. 대부분의 기본 Nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼등 프로바이더로 취급될 수 있습니다. 프로바이더의 주요 아이디어는 종속성으로 주입할 수 있다는 것입니다. 즉, 객체는 서로
다양한 관계를 만들 수 있으며 객체의 인스턴스를 "연결"하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있습니다.
