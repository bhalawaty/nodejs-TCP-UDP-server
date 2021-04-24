
#TCP : 

###telnet 127.0.0.1 8080

| pros | cons |
| :---: | :---: |
| acknowledgment | Larger packets |
| guaranteed delivery, | More bandwidth since more headers.
|
|  connection based | Slower (because of retransmission)
|
| congestion control | stateful once connection is lost its lost, cannot resume it.
|
| ordered packets | # |



#UDP :

###UDP client
###echo "foo" | nc -w1 -u 127.0.0.1 8081


| pros | cons |
| :---: | :---: |
| Stateless | no ack |
| Less bandwidth  | no guaranteed delivery, .|
| Faster to transmit | no congestion control|
| smaller packets | stateful once connection is lost its lost, cannot resume it.|
| ordered packets | no ordered packets|
|  # |  connectionless |
|  # |  no security |