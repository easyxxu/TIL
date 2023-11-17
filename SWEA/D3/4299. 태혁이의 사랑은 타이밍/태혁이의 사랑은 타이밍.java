import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for(int tc=1;tc<=T;tc++) {
			st = new StringTokenizer(br.readLine());
			int time = 0;
			int answer = 0;
			int D = Integer.parseInt(st.nextToken());
			int H = Integer.parseInt(st.nextToken());
			int M = Integer.parseInt(st.nextToken());
			int rD,rH,rM;
			rD = D - 11;
			rH = H - 11;
			rM = M - 11;
			if(rD == 0) {
				if(rH < 0 || rM < 0) {
					answer = -1;
				}else {
					answer += rH * 60 + rM;
				}
			}else {
				answer += rD * 24 * 60 + rH * 60 + rM;
			}
			sb.append("#"+tc+" "+answer+"\n");
		}
		System.out.print(sb);
	}
}