import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		int T = Integer.parseInt(br.readLine());
		for(int tc=1;tc<=T;tc++) {
			String str = br.readLine();
			char[] move = new char[str.length()];
			move = str.toCharArray();
			
			int a = 1;
			int b = 1;
			
			for(int i=0;i<move.length;i++) {
				if(move[i] == 'L') {
					b += a;
				}else if(move[i] == 'R') {
					a += b;
				}
			}
			sb.append("#"+tc+" "+a+" "+b+"\n");
		}
		System.out.print(sb);
	}
}
