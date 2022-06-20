export default function fetchData(executionId: string, setMessage: Function) {

  // var field_mapping = document.getElementById('fieldmapping')
  // function read_map_file(e) {
  //   var map_file = e.target.files[0]
  //   if (!map_file) {
  //       return;
  //   }
  //   var dict = {};
  //   var reader = new FileReader();
  //   reader.onload = function (e) {
  //       var json = e.target.result;
  //       var result = JSON.parse(json);
  //       $.each(result, function (key, value) {
  //           alert(key + ' is ' + value);
  //           //dict[key] = value;
  //       });
  //   };
  //   reader.readAsText(map_file);
  // }

  var json = require('../message_network.json')
  console.log("JSON: ", json)

// if (field_mapping.addEventListener) field_mapping.addEventListener('change', read_map_file, false);
  
// if (executionId && executionId.length > 0) {
  //   let myHeaders: any = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoT1B1cGIxSXlsZnZFeGFVTHU5UkdrSEpmZ3JYTEJaMzVqRll2ZnBrd0o0In0.eyJleHAiOjE2NTA5NjM1MTAsImlhdCI6MTY1MDk1ODI5MCwianRpIjoiNDM0NjdlZjMtODQ4Yi00NGVlLWE2YTktYTIwMjZjNDQyMmM5IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNlbGxhci5mc3QubmV0d29yay9hdXRoL3JlYWxtcy9sb2MtZGV2IiwiYXVkIjpbInJlYWxtLW1hbmFnZW1lbnQiLCJhY2NvdW50Il0sInN1YiI6ImZiNTJkNDBlLWQzMWEtNDQxZC04MzcxLWE4OGRiMjI5MmVjNiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImxvYy1zdHVkaW8tZnJvbnRlbmQiLCJzZXNzaW9uX3N0YXRlIjoiYThjOTNkNTktZGE2Zi00NTBlLWExZDMtODU0NTczY2FjMTdmIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1sb2MtZGV2Il19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJ2aWV3LXVzZXJzIiwicXVlcnktZ3JvdXBzIiwicXVlcnktdXNlcnMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiJhOGM5M2Q1OS1kYTZmLTQ1MGUtYTFkMy04NTQ1NzNjYWMxN2YiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6ImJvc2luIHpoYW5nIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYm9zaW4iLCJnaXZlbl9uYW1lIjoiYm9zaW4iLCJmYW1pbHlfbmFtZSI6InpoYW5nIiwiZW1haWwiOiJib3NpbkBmc3RrLmlvIn0.SjIl9tfZkIfsXjidWUg8Vu_7WB-qzZoSV5L5WXaRA4xDRP9iIo_fZ1p9H1mKOxCQwybxGT7_TuiQDWncxqQJZtitnJvQ1FttscOEslOAZRSEL3Bz1qDdIBw6fKzyQ5iJPGjNHVp3xMsDCqbmBx3VpeKYrcONntQ6bIZ7-7tYXB2BwCL23RuX81krfSIqDwq5r62TmWVP6KdFc3fLeyACVgYXYpprVvF7KDUEcctqgezVb0PQGaAD0GNX-BtXBiiaECTCfngoLp9xHZuADD21NUc9a73y2tjBKXrNolf7MDh6OxfMvcPk23fEvgpMlhQdHJPed9s93Y0VaHCBZ5nxRQ"
  //   );
  //   myHeaders.append("Content-Type", "application/json");

  //   let raw: string = JSON.stringify({
  //     queries: [
  //       {
  //         field: "execution_id",
  //         value: executionId,
  //         type: "match_phrase",
  //       },
  //     ],
  //     from: 0,
  //     size: 30,
  //   });

  //   let requestOptions: RequestInit = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://api.loc-dev2.fst.network/api/v1/events/system_search/search",
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => setMessage(JSON.parse(result)))
  //     .catch((error) => console.log("error", error));
  // }

  const msg = {
    "_status": 200,
    "data": {
      "took": 0,
      "total": 90,
      "count": 10,
      "events": [
        {
          "dataProcessIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-00000000000a",
            "revision": 1,
            "name": "test-eventstore"
          },
          "logicIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-000000000001",
            "revision": 1,
            "name": "test-generic-logic-1"
          },
          "executionId": "Yilx8C-5XgLXiV7t7s0iMQ",
          "taskId": "9KRF7jUnL8tBp4DBPoKqxQ",
          "timestamp": "2022-03-10T03:35:12.575Z",
          "sequence": 12,
          "type": "default",
          "meta": "META_meta_META",
          "sourceDigitalIdentity": "A",
          "targetDigitalIdentity": "calculate_market_data",
          "label": {
            "id": "0b27f5f8-507b-5ee6-b62d-02aa00df60de",
            "name": "TEST_LABEL_FROM_EXAMPLE"
          }
        },
        {
          "dataProcessIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-00000000000a",
            "revision": 1,
            "name": "test-eventstore"
          },
          "logicIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-000000000001",
            "revision": 1,
            "name": "test-generic-logic-1"
          },
          "executionId": "Yilx8C-5XgLXiV7t7s0iMQ",
          "taskId": "9KRF7jUnL8tBp4DBPoKqxQ",
          "timestamp": "2022-03-10T03:35:12.658Z",
          "sequence": 13,
          "type": "default",
          "meta": "META_meta_META",
          "sourceDigitalIdentity": "A",
          "targetDigitalIdentity": "C",
          "label": {
            "id": "0b27f5f8-507b-5ee6-b62d-02aa00df60de",
            "name": "TEST_LABEL_FROM_EXAMPLE"
          }
        },
        {
          "dataProcessIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-00000000000a",
            "revision": 1,
            "name": "test-eventstore"
          },
          "logicIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-000000000001",
            "revision": 1,
            "name": "test-generic-logic-1"
          },
          "executionId": "YilwFB21oO9X3UISmStJ0w",
          "taskId": "hRtMcVHBcoRICAJPhWLiAQ",
          "timestamp": "2022-03-10T03:27:16.843Z",
          "sequence": 0,
          "type": "default",
          "meta": "META_meta_META",
          "sourceDigitalIdentity": "A",
          "targetDigitalIdentity": "D",
          "label": {
            "id": "0b27f5f8-507b-5ee6-b62d-02aa00df60de",
            "name": "TEST_LABEL_FROM_EXAMPLE"
          }
        },
        {
          "dataProcessIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-00000000000a",
            "revision": 1,
            "name": "test-eventstore"
          },
          "logicIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-000000000001",
            "revision": 1,
            "name": "test-generic-logic-1"
          },
          "executionId": "YilwFB21oO9X3UISmStJ0w",
          "taskId": "hRtMcVHBcoRICAJPhWLiAQ",
          "timestamp": "2022-03-10T03:27:17.040Z",
          "sequence": 1,
          "type": "default",
          "meta": "META_meta_META",
          "sourceDigitalIdentity": "calculate_market_data",
          "targetDigitalIdentity": "E",
          "label": {
            "id": "0b27f5f8-507b-5ee6-b62d-02aa00df60de",
            "name": "TEST_LABEL_FROM_EXAMPLE"
          }
        },
        {
          "dataProcessIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-00000000000a",
            "revision": 1,
            "name": "test-eventstore"
          },
          "logicIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-000000000001",
            "revision": 1,
            "name": "test-generic-logic-1"
          },
          "executionId": "YilwdQQkgGgds_x3j2EVzw",
          "taskId": "QStowhuU0SkuxNJWkbOitQ",
          "timestamp": "2022-03-10T03:28:53.917Z",
          "sequence": 4,
          "type": "default",
          "meta": "META_meta_META",
          "sourceDigitalIdentity": "C",
          "targetDigitalIdentity": "E",
          "label": {
            "id": "0b27f5f8-507b-5ee6-b62d-02aa00df60de",
            "name": "TEST_LABEL_FROM_EXAMPLE"
          }
        },
        {
          "dataProcessIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-00000000000a",
            "revision": 1,
            "name": "test-eventstore"
          },
          "logicIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-000000000001",
            "revision": 1,
            "name": "test-generic-logic-1"
          },
          "executionId": "YilwdQQkgGgds_x3j2EVzw",
          "taskId": "QStowhuU0SkuxNJWkbOitQ",
          "timestamp": "2022-03-10T03:28:54.034Z",
          "sequence": 5,
          "type": "default",
          "meta": "META_meta_META",
          "sourceDigitalIdentity": "D",
          "targetDigitalIdentity": "F",
          "label": {
            "id": "0b27f5f8-507b-5ee6-b62d-02aa00df60de",
            "name": "TEST_LABEL_FROM_EXAMPLE"
          }
        },
        {
          "dataProcessIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-00000000000a",
            "revision": 1,
            "name": "test-eventstore"
          },
          "logicIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-000000000001",
            "revision": 1,
            "name": "test-generic-logic-1"
          },
          "executionId": "Yilxe5vk_QJUneO7lX0g5Q",
          "taskId": "UE14ZytX17gSYatNbL6SLA",
          "timestamp": "2022-03-10T03:33:15.530Z",
          "sequence": 6,
          "type": "default",
          "meta": "META_meta_META",
          "sourceDigitalIdentity": "E",
          "targetDigitalIdentity": "G",
          "label": {
            "id": "0b27f5f8-507b-5ee6-b62d-02aa00df60de",
            "name": "TEST_LABEL_FROM_EXAMPLE"
          }
        },
        {
          "dataProcessIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-00000000000a",
            "revision": 1,
            "name": "test-eventstore"
          },
          "logicIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-000000000001",
            "revision": 1,
            "name": "test-generic-logic-1"
          },
          "executionId": "Yilxe5vk_QJUneO7lX0g5Q",
          "taskId": "UE14ZytX17gSYatNbL6SLA",
          "timestamp": "2022-03-10T03:33:15.626Z",
          "sequence": 7,
          "type": "default",
          "meta": "META_meta_META",
          "sourceDigitalIdentity": "E",
          "targetDigitalIdentity": "G",
          "label": {
            "id": "0b27f5f8-507b-5ee6-b62d-02aa00df60de",
            "name": "TEST_LABEL_FROM_EXAMPLE"
          }
        },
        {
          "dataProcessIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-00000000000a",
            "revision": 1,
            "name": "test-eventstore"
          },
          "logicIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-000000000001",
            "revision": 1,
            "name": "test-generic-logic-1"
          },
          "executionId": "YilxpR99tt7actk1HNU9og",
          "taskId": "TdfSx7qWM1n5JzPapScPaA",
          "timestamp": "2022-03-10T03:33:57.256Z",
          "sequence": 8,
          "type": "default",
          "meta": "META_meta_META",
          "sourceDigitalIdentity": "F",
          "targetDigitalIdentity": "G",
          "label": {
            "id": "0b27f5f8-507b-5ee6-b62d-02aa00df60de",
            "name": "TEST_LABEL_FROM_EXAMPLE"
          }
        },
        {
          "dataProcessIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-00000000000a",
            "revision": 1,
            "name": "test-eventstore"
          },
          "logicIdentityContext": {
            "permanentIdentity": "00000000-0000-0000-0000-000000000001",
            "revision": 1,
            "name": "test-generic-logic-1"
          },
          "executionId": "YilxpR99tt7actk1HNU9og",
          "taskId": "TdfSx7qWM1n5JzPapScPaA",
          "timestamp": "2022-03-10T03:33:57.343Z",
          "sequence": 9,
          "type": "default",
          "meta": "META_meta_META",
          "sourceDigitalIdentity": "F",
          "targetDigitalIdentity": "G",
          "label": {
            "id": "0b27f5f8-507b-5ee6-b62d-02aa00df60de",
            "name": "TEST_LABEL_FROM_EXAMPLE"
          }
        }
      ],
      "aggregation": null
    }
  };
  setMessage(json);
}
