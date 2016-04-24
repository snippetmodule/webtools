/**
 * Created by wangfaxi1985 on 16/4/23.
 */
/// <reference path='../../../node_modules/angular2/ts/typings/tsd.d.ts/>
import { Injectable } from 'angular2/core';
import net =require("net");

export class Shell{
    option:{ port: number, host?: string, localAddress? : string, localPort? : string, family? : number, allowHalfOpen?: boolean; } = {};
    constructor(public option:{ port: number, host?: string, localAddress? : string, localPort? : string, family? : number, allowHalfOpen?: boolean; }
        ){
        this.option=option;
    }
}
var client = net.connect({host:'localhost',port:5037}, ()=> {
    console.log('client connected');
    client.write('world');
});
client.on('data',(data)=>{
    console.log(data.toString);
    client.end();
});
client.on('end',()=>{
    console.log('client disconnetctd');
});

@Injectable()
export class ShellService {
    list: any[] = [];

    constructor(private auth: AuthService) {}

    fetchProjects(pin: number): Promise<any> {
        return this.auth.authenticate(pin)
            .then((authenticated: boolean) => {
                if (!authenticated) {
                    this.list = [];
                    return this.list;
                }
                else {
                    this.list = [
                        {name: 'Project 1'},
                        {name: 'Project 2'}
                    ];

                    return this.list;
                }
            });
    }
}
